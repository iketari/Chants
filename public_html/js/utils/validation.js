define(['backbone'],
function(
    Backbone
){
    var Validator = function(controls, inputClassPrefix, errorMessageElement, customValidateFunction) {
        this.controls = controls;
        this.inputClassPrefix = inputClassPrefix;
        this.customValidateFunction = customValidateFunction;
        this.errorMessageElement = errorMessageElement;
    }
  
    Validator.prototype.validateAuthForm = function() {
        var validatedUser = {
            isValid: true
            };
        for (var controlIndex in this.controls) {
            var control = this.controls[controlIndex];
            var controlValue = $(this.inputClassPrefix + control).val();
            if (!(controlValue)) {
                return {
                    errorMessage: 'Заполните все поля формы',
                    firstIncorrectInput: this.inputClassPrefix + control
                    };
            }
            else {
                validatedUser[control] = controlValue;
            }
        }

        if (this.customValidateFunction) {
            return this.customValidateFunction(validatedUser);
        }
        else {
            return validatedUser;
        }
        
    }

    Validator.prototype.showErrorMessage = function(errorMessage, errorInput) {
        $(this.errorMessageElement).html(errorMessage);
        if (errorInput) {
            $(errorInput).focus();
        }
    }

    return Validator;     
   
});