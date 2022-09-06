<script>
    export let header = [];
</script>

{@html header}
<div class="choices">
    <div class="choices-group">
        <ul>
            <slot name="choices" />
        </ul>
    </div>
    <div class="output-group">
        <slot name="output" />
    </div>
</div>
<br />
