## Tags

### Headings

`h1 - h6` - Sarlavha uchun ishlatiladi va butun qatorni egallaydi (block element)

```html
<h1> Heading 1 </h1> 
<h2> Heading 2 </h2> 
<h3> Heading 3 </h3> 
<h4> Heading 4 </h4> 
<h5> Heading 5 </h5> 
<h6> Heading 6 </h6> 
```

`p` - paragraph. Abzats. butun qatorni egallaydi (block element) 

```html
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nesciunt eum ratione sunt praesentium debitis, earum sit nihil
    ipsum totam perspiciatis, ea voluptate doloremque deserunt
    sint fugiat velit odit! Optio, quibusdam!
<p>
```

### line breaks 

`hr` - horizontal rule. yakka teg, gorizontal chiziq

```html
<hr>
```

`br` - break. yakka teg, qatorni sindirish
```html
<br>
```

### text formats

`b` - bold. qalin text uchun. qatorda ketma-ket joylashadi (inline element)

`i` - italic. yotiq text uchun. qatorda ketma-ket joylashadi (inline element)

`u` - underline. text tagidan chiziq tortadi. qatorda ketma-ket joylashadi (inline element)

`del` - delete. text ustidan qiziq tortadi. qatorda ketma-ket joylashadi (inline element)

`sub` - sub. index belgilash uchun. qatorda ketma-ket keladi

`sup` - sup. daraja belgilash uchun. qatorda ketma-ket keladi

`span` - bosh matn. hech qanday vazifasi yuq. qatorda ketma-ket keladi

```html
<b> Bu qalin matn </b>
<i> Bu yotiq matn </i>
<u> Bu tadiga chiziqli matn </u>
<del> Bu o`chirilgan matn </del>

x <sup> 2 </sup>
H <sub> 2 </sub> O
```

### links

`a` - havola (link). boshqa betga yoki saytga yonaltiradi. href attribute bilan manzil belgilanadi

```html
<a href="https://youtube.com"> Youtube </a>
<a href="https://instagram.com"> Instagram </a>
<a href="https://facebook.com"> Facebook </a>
```

### image

`img` - rasm joylash uchun. yakka teg

Attributes: 

`href` - rasm joylashuvi. Internet dan yoki fayl nomi
    
`width` - rasm eni

`height` - rasm bo`yi
```html
<img width="600px" href="http://pixel.com/cat-image.png">
```

## Styles

barcha elementlarga style berish uchun `style` attributi bor 

```html
<p style="color: white;">
    lorem
</p>
```

va unda yozilgan har bir stil, `property` deb nomlanadi va `;` bilan ajratiladi

### Properties

`background-color` - elementning orqa foni 

`color` - matn rangi

`text-align` - matnning joylashuvi `(start, center, end)`

## Commets

Comments - html documentda hech qanday ozgarishga olib kelmaydi va fakat izoh qoldirish uchun ishlatiladi

```html
<h1> Bu sarlavha </h1>
<!-- Bu izoh -->
<p> Bu paragraph </p>
```