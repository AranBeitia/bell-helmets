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

const form = `
<form action="" method="POST" id="registerForm">
</form>
`

const registerForm = `
    <h3 class="fs-5">Step 1 <span class="fs-6">profile</span></h3>
    <fieldset class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label">Your name</label>
        <input
          type="text"
          class="form-control is-valid"
          id="name"
          name="name"
          value="Mark"
          min="5"
          max="20"
          required
        />
        <span class="valid-feedback">Looks good!</span>
      </div>

      <div class="col-md-6">
        <label for="email" class="form-label">Your email</label>
        <input
          type="email"
          class="form-control is-valid"
          id="email"
          value="johndoe@email.com"
          max="50"
          required
          aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
        />
        <span id="validationServerUsernameFeedback" class="invalid-feedback">Please choose an email.</span>
      </div>

      <div class="col-md-6">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="enter a new password"
        />
      </div>

      <div class="col-md-6">
        <label for="confirmPassword" class="form-label">Confirm password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="repeat password"
        />
      </div>
      <button id="button-next" class="btn btn-primary w-25">Next</button>
    </fieldset>
`

const addressForm = `
<h3 class="fs-5">Step 2 <span class="fs-6">address</span></h3>
  <fieldset class="row g-3">
    <div class="col-md-6">
      <label for="address">Your address</label>
      <input type="text" id="address" placeholder="enter your address" />
    </div>

    <div class="col-md-6">
      <label for="cp">Your CP</label>
      <input type="text" id="cp" placeholder="enter your CP" />
    </div>
    <button id="button-next" class="btn btn-primary w-25">Next</button>
  </fieldset>
`

const shippingForm = `
<h3 class="fs-5">Step 3 <span class="fs-6">shipping</span></h3>
  <fieldset class="row g-3">
    <div class="col-md-6">
      <label for="shipping">Your address</label>
      <input type="text" id="shipping" placeholder="enter your shipping" />
    </div>
    <button id="button-next" class="btn btn-primary w-25">Next</button>
  </fieldset>
`

const endForm = `
  <section id="form-end">resume of the form</section>
`
export {
  product,
  form,
  registerForm,
  addressForm,
  shippingForm,
  endForm
}