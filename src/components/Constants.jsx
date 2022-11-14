const getDiscordApiPath = (channel) => {
    return `https://discord.com/api/updates/distributions/app/manifests/latest?platform=win&channel=${channel}&arch=x86`;
};

export const whn = await fetch(getDiscordApiPath('stable'))
    .then((e) => e.json())
    .then((e) => {
        const a = e.full.host_version;
        console.log(a.join('.'));
        return a.join('.');
    })
    .catch((e) => {
        console.error('An error occurred grabbing from the Discord API:\n' + e);
        return `0`;
    });
