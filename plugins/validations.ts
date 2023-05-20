export default (context, inject) => {

    const validations = {
        notEmpty(value: String) {
            return value !== '' || "El campo es obligatorio"
        }
    }

    inject('validations', validations)
}