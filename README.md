function RootBoundary() {
const error = useRouteError();

if (isRouteErrorResponse(error)) {
if (error.status === 404) {
return <div>This page doesn't exist!</div>;
}

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
}

return <div>Something went wrong</div>;
}


Web: React Query Custom Hooks로 더 잘 사용해보기
https://medium.com/hcleedev/web-react-query-custom-hooks%EB%A1%9C-%EB%8D%94-%EC%9E%98-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-2ea47fb358c3

https://fonts.google.com

https://flatuicolors.com/

https://app.[index.tsx](src%2Findex.tsx)quicktype.io/?l=ts


npm install --save react-apexcharts apexcharts

# recoil
아톰을 생성
각각의 아톰에는 원하는 값을 저장.

https://regexr.com/

https://regex101.com/




>