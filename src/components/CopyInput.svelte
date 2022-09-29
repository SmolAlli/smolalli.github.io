<script>
    export let replace;

    let input =
        'git clone https://github.com/BetterDiscord/BetterDiscord.git && cd ./BetterDiscord/ && npm install -g pnpm && pnpm i && pnpm run build && pnpm run inject';
    if (replace) input = input.replace(' && ', replace);
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
