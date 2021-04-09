window.onload = () => {
    document.querySelector('#content').innerHTML = `
    <form onsubmit="generate(); return false;">
        <h5 class="font-semibold"><span class="font-mono text-red-600">*</span> Password Length</h5>
        <hr class="my-2">
        <input required="true" type="radio" id="length_short" name="length" onclick="localStorage['pass_length'] = 'short'">
        <label for="length_short" class="ml-1 font-mono">Short (8-12) <span class="text-xs text-white bg-red-700 py-1 px-2 rounded-lg">Not Secure</span></label>
        <br>
        <input required="true" type="radio" id="length_medium" name="length" onclick="localStorage['pass_length'] = 'medium'">
        <label for="length_medium" class="ml-1 font-mono">Medium (13-17) <span class="text-xs text-white bg-yellow-600 py-1 px-2 rounded-lg">Moderate</span></label>
        <br>
        <input required="true" type="radio" id="length_long" name="length" onclick="localStorage['pass_length'] = 'long'">
        <label for="length_long" class="ml-1 font-mono">Long (18-22) <span class="text-xs text-white bg-green-600 py-1 px-2 rounded-lg">Secure</span></label>
        <br>
        <div class="flex mt-5 justify-center">
            <button class="focus:outline-none border border-indigo-700 transition-colors py-2 px-10 bg-indigo-700 rounded-l-lg text-white font-mono hover:bg-gray-50 hover:text-indigo-700 hover:border-indigo-700" type="submit">Generate</button>
            <a id="result" class="font-mono py-2 text-indigo-700 px-5 bg-gray-300 rounded-r-lg">Not generated!</a>
        </div>
    </form>
    `;

    if (localStorage['pass_length']) {
        if (localStorage['pass_length'] == 'short') document.querySelector('#length_short').setAttribute('checked', 'checked');
        if (localStorage['pass_length'] == 'medium') document.querySelector('#length_medium').setAttribute('checked', 'checked');
        if (localStorage['pass_length'] == 'long') document.querySelector('#length_long').setAttribute('checked', 'checked');
    } else {
        localStorage['pass_length'] = 'short';
        document.querySelector('#length_short').setAttribute('checked', 'checked');
    };

    window.generate = () => {
        function password() {
            var length = localStorage['pass_length'] == 'short' ? (
                Math.floor(Math.random() * 5) + 8
            ) : localStorage['pass_length'] == 'medium' ? (
                Math.floor(Math.random() * 5) + 13
            ) : localStorage['pass_length'] == 'long' ? (
                Math.floor(Math.random() * 5) + 18
            ) : Math.floor(Math.random() * 5) + 8;

            var charset = "abcdefghijk%&/(lmnopqrstuvwxyz).;[]ABCDEFGHIJKLMNOPQR!+?*STUVWXYZ0123456789_-:,";
            var retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            };
            return retVal;
        };

        document.querySelector('#result').innerHTML = password();
    };
};
