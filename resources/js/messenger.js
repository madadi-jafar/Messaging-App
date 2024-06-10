/**
 * -------------------------
 * Reusable Functions
 * -------------------------
 */

function imagePreview(input, selector) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $(selector).attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

/**
 * -------------------------
 * On DOM load
 * -------------------------
 */
$(document).ready(function () {
    $('#select_file').change(function () {
        imagePreview(this, '.profile-image-preview');
    });
});
