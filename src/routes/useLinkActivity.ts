
export function useLinkActivity(link:string) {
    // const location = useLocation();
    // const paths = location.pathname.split("/")
    // return paths.includes(link)
    const currentUrl = window.location.href;
    // const paths = currentUrl.split("/");
    // paths.splice(0, 3)
    return currentUrl.includes(link)
}