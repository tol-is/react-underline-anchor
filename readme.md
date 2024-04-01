# Over-engineered animated underline transition

https://react-underline-anchor.vercel.app/

An over-engineered recipe of an animated underline transition.

`<AnchorUnderline speed={0.6} />`


Internally the component, is measuring the length of its text contents, to compute the animation duration, so the transition feels consistent across applications, within paragraphs, or standalone navigation links.

Renders staggered entry and exit underline transitions and implements an abstract speed prop, that configures the relative velocity. Using CSS custom properies you can further customize the underline color, size , position, duration, and transition curve.


### Using css
```
.custom_link {
  --underline-ease-in: ease-out;
  --underline-ease-out: ease-in-out;
  --underline-position-y: 88%;
  --underline-duration: 3px;
  --underline-size: 1px;
  --underline-color: currentColor;
}

<AnchorUnderline className="custom_link"/>
```

### Inline CSS Props
```
<AnchorUnderline
style={{
  '--underline-ease-in': 'ease-out',
  '--underline-ease-out': 'ease-in-out',
  '--underline-position-y': '88%',
  '--underline-duration': '3px',
  '--underline-size': '1px',
  '--underline-color': 'currentColor',
  } as React.CSSProperties}
/>
```

