<script>
    export let input =
        'git clone https://github.com/BetterDiscord/BetterDiscord.git && cd ./BetterDiscord/ && npm i && npm run build && npm run inject';
</script>

<input type="text" value={input} readonly id="copy" />
<button
    on:click={(e) => {
        console.log('test');
        let elem = e.target.previousElementSibling;
        elem.select();
        elem.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(elem.value);
    }}
    class="button"
    >Click here to copy
</button>
