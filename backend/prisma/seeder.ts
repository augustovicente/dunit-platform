import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type SeedData = {
    areas: {
        id: number;
        name: string;
    }[];
    vc_rounds: {
        id: number;
        name: string;
    }[];
    user_types: {
        id: number;
        name: string;
    }[]
};

async function main()
{
    const data:SeedData = require('../seed-data.json')
    
    for (const area of data.areas)
    {
        await prisma.area.upsert({
            where: { id: area.id },
            update: {},
            create: {
                id: area.id,
                name: area.name,
            },
        });
    }
    for (const ut of data.user_types)
    {
        await prisma.userType.upsert({
            where: { id: ut.id },
            update: {},
            create: {
                id: ut.id,
                name: ut.name,
            },
        });
    }
    for (const vcr of data.vc_rounds)
    {
        await prisma.vCRound.upsert({
            where: { id: vcr.id },
            update: {},
            create: {
                id: vcr.id,
                name: vcr.name,
            },
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })