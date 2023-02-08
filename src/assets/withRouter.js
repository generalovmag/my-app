import React, {useMemo} from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

// export function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//     const router1 = useRouter();
//         return <Component {...props} router={router1} />;
//     }
//
//     return ComponentWithRouterProp;
// }
// // Hook
// export function useRouter() {
//     const params = useParams();
//     const location = useLocation();
//     const navigate = useNavigate();
//     // Return our custom router object
//     // Memoize so that a new object is only returned if something changes
//     return useMemo(() => {
//         return {
//             params,
//             location,
//             navigate
//         };
//     }, [params, location, navigate]);
// }