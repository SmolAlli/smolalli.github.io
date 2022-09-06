<script>
    export let tabs = ['Default'];
    import changeActive from './ChangeActive';
</script>

<div class="choices tabs">
    <div class="choices-group">
        <ul class="tab">
            {#each tabs as tabs, i}
                <li>
                    <button class={`options${i === 0 ? ' active' : ''}`} on:click={changeActive}>{tabs}</button>
                </li>
            {/each}
        </ul>
    </div>
    <div class="output-group">
        <slot />
    </div>
</div>
