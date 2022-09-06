<script>
    import { createEventDispatcher } from "svelte";
    export let isOpenModal;
    $: active = isOpenModal;
    const dispatch = createEventDispatcher();

    export const closeModal = () => {
        dispatch("closeModal", { isOpenModal });
        active = false;
        setTimeout(() => {
            isOpenModal = false;
        }, 500);
    };
</script>

<div
    class="modal{active ? ' active' : ''}"
    style={isOpenModal ? "display: block;" : "display: none;"}>
    <div id="background" on:click={closeModal} />
    <div id="modal">
        <slot name="content" />
    </div>
</div>
