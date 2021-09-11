# API

## Add
Generate API by running `yarn gen` and select *api*.

The uses of *Typescript* will help develop a much organized frontend<->backend interaction.

## Axios
The project is using [Axios](https://axios-http.com/docs/intro) for http/https request and response.

### Request
```typescript
const requestConfig: AxiosRequestConfig = {
  url: '/user',
  method: 'get',
  baseURL: 'https://api.example.com/',
  transformRequest: (data: any) => '{"foo":"bar"}',
  transformResponse: [
    (data: any) => ({ baz: 'qux' })
  ],
  headers: { 
    'X-FOO': 'bar', 
    "Authorization":"Bear xxxxxxxxx" 
  },
  params: { id: 12345 },
  paramsSerializer: (params: any) => 'id=12345',
  data: { foo: 'bar' },
  timeout: 10000,
  withCredentials: true,
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  onUploadProgress: (progressEvent: ProgressEvent) => {},
  onDownloadProgress: (progressEvent: ProgressEvent) => {},
  maxContentLength: 2000,
  maxBodyLength: 2000,
  validateStatus: (status: number) => status >= 200 && status < 300,
  maxRedirects: 5,
  proxy: {
    host: '127.0.0.1',
    port: 9000
  },
  cancelToken: new axios.CancelToken((cancel: Canceler) => {})
};

```

### Response 
```typescript
const response:AxiosResponse = {
  data: { 
    data: {},
    message: '',
    success: true,
    code:123,
  },
  status: 200,
  statusText: 'OK',
  headers: { 'X-FOO': 'bar' },
}



```