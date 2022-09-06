<script>
    export let elemNames;

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
</script>

{#each elemNames as elemName}
    <div
        class="skill {elemName}"
        style="background-color: hsla({randomInt(0, 360)},{randomInt(
            42,
            98
        )}%,{randomInt(40, 90)}%, 0.4)">
        {elemName}
    </div>
{/each}
