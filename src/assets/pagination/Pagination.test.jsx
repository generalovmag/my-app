import {create} from "react-test-renderer";
import Pagination from "./Pagination";


describe('Pagination test', () => {
    test('page count id 11 but should br showed onl 10', () => {
        const component = create(<Pagination totalItemsCount={111} pageSize={10} />)
        const root = component.root
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(12)
    })
})