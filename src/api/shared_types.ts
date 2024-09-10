interface IResponse<T> {
  data: T;
  error?: string;
}



interface IPaginationResponse {
  meta: {
    current_page: number;
    total_pages: number;
  };
}

export type { IPaginationResponse, IResponse };

