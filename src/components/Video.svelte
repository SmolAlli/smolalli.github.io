<script>
    import Modal from './Modal.svelte';

    export let video;
    export let title;
    export let buttonText = 'Click to watch video tutorial';
    export let extras = '';

    let modal;
    let isOpenModal = false;

    const showModal = () => {
        setTimeout(() => {
            isOpenModal = true;
        }, 0);
    };

    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
</script>

<div class="videoButton">
    <button class="button" on:click={showModal}>{buttonText}</button>
</div>

<Modal bind:this={modal} bind:isOpenModal>
    <svelte:fragment slot="content">
        <div class="modal-content">
            <h2>Video Tutorial</h2>
            <button
                class="button back"
                on:click={(e) => {
                    modal.closeModal();
                }}>
                Close modal
            </button>
            {#if video.includes('youtu.be')}
                <iframe
                    width="946"
                    height="532"
                    src="https://www.youtube-nocookie.com/embed/{video.split('/')[1]}{extras}"
                    {title}
                    frameborder="0"
                    allowfullscreen />
            {:else}
                <video controls="controls" id="video"
                    ><track kind="captions" /><source src={video} type="video/mp4" />Your browser does not support the
                    video tag.</video>
            {/if}
        </div>
    </svelte:fragment>
</Modal>
