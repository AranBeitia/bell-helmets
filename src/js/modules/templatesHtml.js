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
<form action="#" method="" id="registerForm" name="registerForm">
  <fieldset data-fieldset="profile">
    <h3 class="fs-5">Step 1 <span class="fs-6">profile</span></h3>
    <section class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label">Your name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          min="5"
          max="20"
        />
      </div>

      <div class="col-md-6">
        <label for="email" class="form-label">Your email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          max="50"
        />
      </div>

      <div class="col-md-6">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          placeholder="enter a new password"
        />
      </div>

      <div class="col-md-6">
        <label for="confirmPassword" class="form-label">Confirm password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="repeat password"
        />
      </div>
    </section>
  </fieldset>

  <fieldset data-fieldset="address">
    <h3 class="fs-5">Step 2 <span class="fs-6">address</span></h3>
    <section class="row g-3">
      <div class="col-md-6">
        <label for="firstName" class="form-label">Your first name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          name="firstName"
          max="20"
        />
      </div>
      <div class="col-md-6">
        <label for="lastName" class="form-label">Your last name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          name="lastName"
          max="20"
        />
      </div>
      <div class="col-md-6">
        <label for="birthday" class="form-label">Your birthday</label>
        <input
          type="date"
          class="form-control"
          id="birthday"
          name="birthday"
        />
      </div>
      <div class="col-md-6">
        <label for="address" class="form-label">Your address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          name="address"
          max="50"
        />
      </div>
      <div class="col-md-6">
        <label for="address2" class="form-label">Your address2</label>
        <input
          type="text"
          class="form-control"
          id="address2"
          name="address2"
          max="50"
        />
      </div>
      <div class="col-md-6">
        <label for="postalCode" class="form-label">Your postal code</label>
        <input
          type="number"
          class="form-control"
          id="postalCode"
          name="postalCode"
          max="5"
        />
      </div>
      <div class="col-md-6">
        <label for="country" class="form-label">Your country</label>
        <select class="form-select" name="country" id="country" required>
          <option data-countryCode="AD" value="Andorra">Andorra</option>
          <option data-countryCode="FR" value="France">France</option>
          <option data-countryCode="DE" value="Germany">Germany</option>
          <option data-countryCode="GR" value="Greece">Greece</option>
          <option data-countryCode="ES" value="Spain">Spain</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="countryCode" class="form-label">Your country Code</label>
        <select class="form-select" name="countryCode" id="" required>
          <option data-countryCode="AD" value="376" selected>Andorra (+376)</option>
          <option data-countryCode="FR" value="33">France (+33)</option>
          <option data-countryCode="DE" value="49">Germany (+49)</option>
          <option data-countryCode="GR" value="30">Greece (+30)</option>
          <option data-countryCode="ES" value="34">Spain (+34)</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label">Your phone number</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          name="phone"
          max="9"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </div>
      <div class="col-md-6 form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkData" name="checkData">
        <label class="form-check-label" for="checkData">This is my regular address</label>
      </div>
    </section>
  </fieldset>

  <fieldset data-fieldset="shipping">
    <h3 class="fs-5">Step 3 <span class="fs-6">shipping</span></h3>
    <section class="row g-3">
      <div class="col-md-6">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="shipment" id="freeShipment" value="Free shipment (72H) ( no extra cost )" >
          <label class="form-check-label" for="freeShipment">Free shipment (72H) ( no extra cost )</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="shipment" id="extraShipping" value="Extra shipping (48h) ( +5 € )" checked>
          <label class="form-check-label" for="extraShipping">Extra shipping (48h) ( +5 € )</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="shipment" id="premium" value="Premium (24h) ( + 10€ )" >
          <label class="form-check-label" for="premium">Premium (24h) ( + 10€ )</label>
        </div>
      </div>
    </section>
  </fieldset>

  <fieldset data-fieldset="resume">
    <h3 class="fs-5">Resume of the form</h3>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="termsConditions" id="termsConditions" >
      <label class="form-check-label" for="termsConditions"><a href="#">Terms and conditions</a></label>
    </div>
  </fieldset>

  <div class="d-flex justify-content-end my-4">
    <button id="button-previous" class="btn btn-primary w-25 me-4">Previous</button>
    <button id="button-next" class="btn btn-primary w-25">Next</button>
  </div>

  <section class="d-flex justify-content-center">
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
  </section>
</form>
`

export {
  product,
  form
}