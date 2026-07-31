/**
 * Функция для чтения куки по имени.
 * @param {string} name - Имя куки.
 * @returns {string|null} - Значение куки или null, если не найдено.
 */
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

jQuery(document).ready(function($) {
    $('.wpcf7-form').each(function() {
        const $form = $(this);

        const fvdValue = getCookie('fvd');
        const lvdValue = getCookie('lvd');

        const $fvdField = $form.find('input[name="fvd_cookie_field"]');
        if ($fvdField.length > 0 && fvdValue) {
            $fvdField.val(fvdValue);
        }

        const $lvdField = $form.find('input[name="lvd_cookie_field"]');
        if ($lvdField.length > 0 && lvdValue) {
            $lvdField.val(lvdValue);
        }
    });
});