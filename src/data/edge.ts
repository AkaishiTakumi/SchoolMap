export type Edge = {
    target: string;
    weight: number;
};

export type Vec = {
    id: string;
    edges: Edge[];
}

export const vecs: Vec[] = [
    {
        id: "SA1SB1",
        edges: [
            {
                target: "SB1SC1SD1",
                weight: 2
            },
            {
                target:"SA1SA2",
                weight: 2
            }
        ],
    },
    {
        id: "SB1SC1SD1",
        edges: [
            {
                target: "SD1SE1",
                weight: 2
            },
        ],
    },
]