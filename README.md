This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repository:

```sh
git clone https://github.com/arthurarw/velv-frontend.git
```

Create the .env file

```sh
cp .env.example .env
```

Update environment variables on .env file
```dosini
NEXT_PUBLIC_API="http://localhost:8989/api"
```

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Link on production

[http://ec2-18-230-138-180.sa-east-1.compute.amazonaws.com:3000/](http://ec2-18-230-138-180.sa-east-1.compute.amazonaws.com:3000/)
