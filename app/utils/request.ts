class ApiRequest {
  fetchData(url, params) {
    return fetch(url).then(response => response.json());
  }
}

class MockRequest {}

let apiRequest = new ApiRequest();
const mockRequest = new MockRequest();

export { apiRequest, mockRequest };
