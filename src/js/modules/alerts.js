const empty = `
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <p><strong>Holy guacamole!</strong> The field can't be empty</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
`
const invalidLength = `
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <p><strong>Holy guacamole!</strong> Incorrect length of value</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
`

const invalidType = `
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <p><strong>Holy guacamole!</strong> Incorrect type of value</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
`

const invalidPassword = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <p><strong>Hello kitty!</strong> Password must be (>8, n, N, 123..., *@%...)</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
`

const samePassword = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <p><strong>Hello kitty!</strong> Password is not the same</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
`
const success = `
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <p><strong>Hello ween!</strong> The field must be length between 5 and 20 </p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
`




export { empty, invalidLength, invalidType, invalidPassword, samePassword }

