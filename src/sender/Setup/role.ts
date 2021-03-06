import { Guild } from 'discord.js';
import { getGuildInfo } from '../../utils/guild';
export const setRole = async (
    guild: Guild,
    args: Array<string>
): Promise<string> => {
    const roleName = args.join(' ');
    const role = guild.roles.cache.find((role) => role.name === roleName);
    if (role === undefined || role === null) return 'Wrong Role Name';
    const server = await getGuildInfo(guild);
    if (server === null) {
        return 'failed to set respose Role ' + roleName;
    }
    return 'changed respose Role to ' + role.name;
};
