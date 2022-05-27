import {render, screen} from "@testing-library/react"
import CoinsTable from "./components/CoinsTable";
import { rest } from "msw";
import {setupServer} from "msw/node"
import {SingleCoin} from './config/api'
import App from "./App";

// const response = rest.get(SingleCoin , (req, res, ctx)  => {
//     return  res(ctx.json([{id: 'bitcoin', symbol: 'btc', name: 'Bitcoin'}]))
// } )

// const handlers = [response]

// const server = new setupServer()

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

test('renders root component', async  () => {
    render(<CoinsTable /> )
})