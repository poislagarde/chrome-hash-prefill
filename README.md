# Hash Prefill Extension for Chrome

This Chrome extension allows pre-filling form fields via URL hash parameters. Useful for websites that don't provide a way to pre-fill their form fields.

## Usage

For example if the page `www.logistics.com/track` has the following field

```html
<label for="tid">Tracking number(s)</label><br>
<input type="text" id="tid" name="tracking-id"><br>
```

You can prefill it by referencing its name in the URL hash

```
www.logistics.com/track#tracking-id=123456789
```

