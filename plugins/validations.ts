export default (context, inject) => {

    const validations = {
        notEmpty(value: String) {
            return value !== '' || "El campo es obligatorio"
        },

        isValidEmail(value: String) {
            return value.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/) instanceof Object || "El email es inválido"
        },
    }

    inject('validations', validations)
}