<script>
    import { onMount } from 'svelte';

    let components = {
        'visual-ins': 'v-install',
        'visual-unins': 'v-uninstall',
        'visual-ptins': 'v-addons',
        faq: 'faq',
        support: 'support',
        install: 'install',
        'install-guide': 'install',
        'install-error': 'install/errors',
        'install-issue': 'install/issues',
        crash: 'crash',
        manual: 'manual',
        links: 'links',
        credit: 'credit',
        submit: 'submit',
        vanilla: 'vanilla',
    };
    let hash;

    onMount(() => {
        hash = window.location.hash;
        show = 'empty';
        if (hash == '') return;
        hash = hash.substring(1);
        if (Object.keys(components).includes(hash)) {
            window.location.replace(`/BetterDiscord/${components[hash]}`);
        } else {
            window.location.replace('/BetterDiscord');
        }
    });
</script>
