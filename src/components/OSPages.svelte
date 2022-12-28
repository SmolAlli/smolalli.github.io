<script>
    import { onMount } from 'svelte';

    const optNames = ['win', 'mac', 'linux'];
    let currOS = '',
        plat;

    export let currentPage = '/BetterDiscord';

    onMount(() => {
        currOS = localStorage.getItem('chosenOS');
        plat = window.navigator.platform.toLowerCase();
        if (!currOS) {
            optNames.forEach((os) => {
                // Make sure not to automatically redirect on android devices
                if (plat.includes(os) && !plat.includes('arch')) {
                    currOS = os;
                }
            });
        }

        if (currOS === 'win') currOS = 'windows';

        console.log(currOS);
        console.log(currentPage);

        currOS != null && window.location.replace(`${currentPage}/${currOS}`);
    });

    // change this to just make an automatic assumption based off of what OS the user actually has - much easier.
    // if this doesnt exist then give an option to choose an OS
</script>
