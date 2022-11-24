# Selectors

1. tag selector
2. id selector `#unique`
3. class selector `.class`

# Properties

1. width/height
```css

* {
    width: 300px; /* == 300 */
    min-width: 300px;  /* > 300 */
    max-width: 300px; /* < 300 */
}
```
2. margin/padding

```css
.box {
    margin: 30px; /* top right bottom left */
    margin: 40px 100px; /* vectical horizontal */
    margin: 20px 40px 60px 100px; /* top right bottom left */
    padding: 30px;
}
```

3. border

```css
  /* 
    border-width: 5px;
    border-style: solid;
    border-color: yellow;
    */
    /* border: 5px solid yellow; */
    border-left: 5px solid rgb(0, 170, 255);

    /* border-style: dashed; */
    /* border-style: dotted; */
    /* border-style: double; */
    /* border-style: groove; */
    /* border-style: ridge; */
    /* border-style: inset; */
    /* border-style: outset; */
```

4. background