const product = `
  <article id="producto">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, autem
      veniam repudiandae natus optio repellat?
    </p>
    <button id="buy-cta" class="button">BUY</button>
  </article>
`

const carrito = `
<article id="carrito">
  <section id="form-profile">
    <h1 class="text-uppercase">Step 1 - profile</h1>
    <form action="" method="POST">
      <label for="name">Your name</label>
      <input type="text" id="name" placeholder="enter your name" />

      <label for="last-name">Your last name</label>
      <input
        type="text"
        id="last-name"
        placeholder="enter your last name"
        class="button"
      />
      <input type="submit" value="validate" id="button-next" class="button" />
    </form>
  </section>
</article>
`

const addressForm = `
  <section id="form-address">
    <h1>Step 2 - address</h1>
    <form action="" method="POST">
      <label for="address">Your address</label>
      <input type="text" id="address" placeholder="enter your address" />

      <label for="cp">Your CP</label>
      <input type="text" id="cp" placeholder="enter your CP" />

      <input type="submit" value="validate" id="button-next" class="button" />
    </form>
  </section>
`

const shippingForm = `
  <section id="form-shipping">
    <h1>Step 3 - SHIPPING</h1>
    <form action="" method="POST">
      <label for="shipping">Your address</label>
      <input type="text" id="shipping" placeholder="enter your shipping" />

      <input type="submit" value="validate" id="button-next" class="button" />
    </form>
  </section>
`

const endForm = `
  <section id="form-end">END</section>
`
export {
  product,
  carrito,
  addressForm,
  shippingForm,
  endForm
}