# Ove-rengineered animated underline anchor

The underline color, weight, position and pace can be configured using custom CSS properties, and can be fine-tuned, for every custom use-case. Its implemented using background-image, so both the underline and transition, will work beautifully, with single-line, or multi-line text, anchors within long format paragraphs, or standalone navigation links. Internally the component, is using the length of the text contents, to compute the animation duration, so the underline transition of longer text would take longer and shorter text would animate faster, to ensure that the animation feels reasonably consistent across different text lengths.

https://react-underline-anchor.vercel.app/