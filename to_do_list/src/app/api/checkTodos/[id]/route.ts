import { NextRequest, NextResponse } from "next/server";


export async function PUT(req: NextRequest,{ params }: { params: { id: string } }) {
    console.log('req: ', params.id);
    // console.log('req: ', req);

    try {
        // const _id = await req.json();
        // console.log(_id,"DATATATA")
        const response = await fetch(`http://localhost:8080/todos/${params.id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            // body: JSON.stringify(_id)
        })
        const res = await response.json();
        console.log('res: ', res);
        // console.log('res: ', res);
        return Response.json(res, {
            status: response.status,
        });
    }
    catch (e) {
        console.log('e: ', e);
        return NextResponse.json(e, { status: 400 })
    }
}
