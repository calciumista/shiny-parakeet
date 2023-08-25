<script>
    import { page } from '$app/stores';

    export const emojis = {
        404: '🙈',
        420: '🫠',
        500: '💥'
    };
</script>

<div class="py-8">
    <div class="artboard phone-4 bg-blue-600 rounded-md artboard-demo m-auto p-4">
        <span style="font-size: 10em">
	        {emojis[$page.status] ?? emojis[500]}
        </span>
        <h1 class="font-bold text-xl">{$page.status} {$page.error.message}</h1>
    </div>
</div>