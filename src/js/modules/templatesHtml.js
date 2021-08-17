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
      <h3 class="fs-5">Bell Moto 3 Classic <span class="fw-light fs-6">white</span></h3>
      <p class="fs-4 fw-bold">249,99 € <span class="fw-light fs-6">+ Shipping costs</span></p>
      <button id="buy-cta" class="btn btn-primary w-100">Purchase</button>
    </div>
  </section>
  </div>
`

const profileForm = `
  <section id="form-profile">
    <h3 class="fs-5">Step 1 <span class="fs-6">profile</span></h3>
    <form action="" method="POST" class="row g-3" >
      <div class="mb-3 col-md-6">
        <label for="name" class="form-label">Your name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          placeholder="enter your name"
          min="5"
          max="20"
          required
        />
      </div>

      <div class="mb-3 col-md-6">
        <label for="email" class="form-label">Your email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="enter your email"
          max="50"
          required
        />
      </div>

      <div class="mb-3 col-md-6">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="enter a new password"
        />
      </div>

      <div class="mb-3 col-md-6">
        <label for="confirmPassword" class="form-label">Confirm password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="repeat password"
        />
      </div>
    </form>
  </section>
  <div class="modal-footer border-top-0">
    <button id="button-next" class="btn btn-primary w-25">Next</button>
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
    <button id="button-next" class="btn btn-primary w-25">Next</button>
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
    <button id="button-next" class="btn btn-primary w-25">Next</button>
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