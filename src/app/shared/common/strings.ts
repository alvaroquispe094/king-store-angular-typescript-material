export const VALIDATIONS = {
  required: {
    text: '*You must enter a value',
  },
  form_product: {
    email: '*Not a valid email',
    min: '*Number should not be less than 5',
    max: '*Number should not be more than 10',
    min_length: '*Should not be less than 5 characters',
    max_length: '*Should not be more than 10 characters',
  },
  sign_in: {
    email: '*Not a valid email',
    min_length: '*Password should not be less than 5 characters',
  },
  sign_up: {
    email: '*Not a valid email',
    min_length: '*Password should not be less than 5 characters',
  },
};

export const MESSAGES = {
  create_prod: 'Created product!',
  update_prod: 'Updated product!',
};
