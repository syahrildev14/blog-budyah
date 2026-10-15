<?php

namespace App\Support;

use DOMDocument;
use DOMElement;
use DOMNode;

/**
 * Allowlist-based HTML sanitizer for rich-text post content.
 *
 * Content submitted through the TinyMCE editor is stored as raw HTML and
 * later rendered with dangerouslySetInnerHTML on the public site, so it must
 * be stripped of scripts/event handlers/unsafe URLs before it is saved.
 */
class HtmlSanitizer
{
    private const ALLOWED_TAGS = [
        'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'span', 'div', 'blockquote',
        'ul', 'ol', 'li', 'a', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'table', 'thead', 'tbody', 'tr', 'td', 'th', 'code', 'pre', 'hr',
        'figure', 'figcaption', 'iframe', 'video', 'source',
    ];

    private const ALLOWED_ATTRS = [
        '*' => ['style', 'class', 'title'],
        'a' => ['href', 'target', 'rel'],
        'img' => ['src', 'alt', 'width', 'height'],
        'td' => ['colspan', 'rowspan'],
        'th' => ['colspan', 'rowspan'],
        'iframe' => ['src', 'width', 'height', 'allowfullscreen', 'frameborder'],
        'video' => ['src', 'controls', 'width', 'height'],
        'source' => ['src', 'type'],
    ];

    public static function clean(?string $html): string
    {
        $html = (string) $html;

        if (trim($html) === '') {
            return '';
        }

        $dom = new DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML(
            '<?xml encoding="utf-8" ?><div>' . $html . '</div>',
            LIBXML_NOERROR | LIBXML_NOWARNING
        );
        libxml_clear_errors();

        $root = $dom->getElementsByTagName('div')->item(0);

        if (! $root) {
            return '';
        }

        self::sanitizeChildren($root);

        $output = '';
        foreach (iterator_to_array($root->childNodes) as $child) {
            $output .= $dom->saveHTML($child);
        }

        return $output;
    }

    private static function sanitizeChildren(DOMNode $node): void
    {
        foreach (iterator_to_array($node->childNodes) as $child) {
            if ($child instanceof DOMElement) {
                $tag = strtolower($child->tagName);

                if (! in_array($tag, self::ALLOWED_TAGS, true)) {
                    while ($child->firstChild) {
                        $node->insertBefore($child->firstChild, $child);
                    }
                    $node->removeChild($child);

                    continue;
                }

                self::sanitizeAttributes($child);
                self::sanitizeChildren($child);
            } elseif ($child->nodeType === XML_COMMENT_NODE) {
                $node->removeChild($child);
            }
        }
    }

    private static function sanitizeAttributes(DOMElement $el): void
    {
        $tag = strtolower($el->tagName);
        $allowed = array_merge(self::ALLOWED_ATTRS['*'], self::ALLOWED_ATTRS[$tag] ?? []);

        foreach (iterator_to_array($el->attributes) as $attr) {
            $name = strtolower($attr->name);

            if (str_starts_with($name, 'on') || ! in_array($name, $allowed, true)) {
                $el->removeAttribute($attr->name);

                continue;
            }

            $value = $attr->value;

            if (in_array($name, ['href', 'src'], true) && self::hasUnsafeScheme($value)) {
                $el->removeAttribute($attr->name);

                continue;
            }

            if ($name === 'style' && preg_match('/url\(|javascript|expression\(/i', $value)) {
                $el->removeAttribute($attr->name);
            }
        }

        if ($tag === 'a') {
            $el->setAttribute('rel', 'noopener noreferrer nofollow');
        }
    }

    private static function hasUnsafeScheme(string $value): bool
    {
        $value = trim(strtolower($value));

        if (str_starts_with($value, 'data:image/')) {
            return false;
        }

        return (bool) preg_match('#^\s*(javascript|vbscript|data):#i', $value);
    }
}
