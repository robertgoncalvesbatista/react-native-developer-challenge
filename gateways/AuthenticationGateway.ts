import { HttpClient } from "../adapters/AxiosHttpClientAdapter";

interface IResponse {
  body: any;
  status: number;
  statusText: string;
}

interface IRequest {
  headers: any;
  body?: any;
  id?: string;
}

interface IAuthenticationGateway {
  login: (request: IRequest) => Promise<IResponse>;
  logout: (request: IRequest) => Promise<void>;
}

export class AuthenticationGateway implements IAuthenticationGateway {
  constructor(readonly httpClient: HttpClient) {}

  async login(request: IRequest): Promise<IResponse> {
    return await this.httpClient.request({
      method: "post",
      url: "http://192.168.3.202/api/login",
      body: request.body,
    });
  }

  async logout(request: IRequest): Promise<void> {
    return await this.httpClient.request({
      method: "post",
      url: "http://192.168.3.202/api/logout",
      headers: request.headers,
    });
  }
}
