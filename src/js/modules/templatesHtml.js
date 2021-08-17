const product = `
  <section id="product" class="d-flex">
    <ul class="list-group">
      <li class="list-group-item image-list">
        <img class="img-fluid" src="src/assets/img/bell-motoIII-01.jpg" alt="Bell moto 3" />
      </li>
      <li class="list-group-item image-list">
        <img class="img-fluid" src="src/assets/img/bell-motoIII-02.jpg" alt="Bell moto 3" />
      </li>
      <li class="list-group-item image-list">
        <img class="img-fluid" src="src/assets/img/bell-motoIII-03.jpg" alt="Bell moto 3" />
      </li>
      <li class="list-group-item image-list">
        <img class="img-fluid" src="src/assets/img/bell-motoIII-04.jpg" alt="Bell moto 3" />
      </li>
    </ul>
    <div class="p-2">
      <img id="imageSelected" class="img-fluid" src="src/assets/img/bell-motoIII-01.jpg" alt="Bell moto 3" />
    </div>
    <div class="w-100">
      <h2 class="fs-5">Bell Moto 3 Classic <span class="fw-light fs-6">white</span></h2>
      <p class="fs-4 fw-bold">249,99 € <span class="fw-light fs-6">+ Shipping costs</span></p>
      <button id="buy-cta" class="btn btn-outline-primary w-100">Purchase</button>
    </div>
  </section>
  </div>
`

const profileForm = `
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
    </form>
  </section>
  <div class="modal-footer">
    <button id="button-next" class="btn btn-primary">Next</button>
  </div>
`

const addressForm = `
  <section id="form-address">
    <h1>Step 2 - address</h1>
    <form action="" method="POST">
      <label for="address">Your address</label>
      <input type="text" id="address" placeholder="enter your address" />

      <label for="cp">Your CP</label>
      <input type="text" id="cp" placeholder="enter your CP" />
    </form>
  </section>
  <div class="modal-footer">
    <button id="button-next" class="btn btn-primary">Validate</button>
  </div>
`

const shippingForm = `
  <section id="form-shipping">
    <h1>Step 3 - SHIPPING</h1>
    <form action="" method="POST">
      <label for="shipping">Your address</label>
      <input type="text" id="shipping" placeholder="enter your shipping" />
    </form>
  </section>
  <div class="modal-footer">
    <button id="button-next" class="btn btn-primary">Validate</button>
  </div>
`

const endForm = `
  <section id="form-end">END</section>
`
export {
  product,
  profileForm,
  addressForm,
  shippingForm,
  endForm
}