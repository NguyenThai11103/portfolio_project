import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener: () => {}, removeListener: () => {} }));
  class IntersectionObserverMock {
    constructor(callback) {
      this.callback = callback;
    }
    observe(element) {
      this.callback([{ isIntersecting: true, target: element }], this);
    }
    unobserve() {}
    disconnect() {}
  }
  window.IntersectionObserver = IntersectionObserverMock;
  global.IntersectionObserver = IntersectionObserverMock;
});

beforeEach(() => {
  window.localStorage.clear();
  global.fetch = vi.fn();
});

test("renders GitHub-backed projects and switches the full page to English", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /xây dựng hệ thống/i })).toBeInTheDocument();
  expect(screen.getByText("DZFullStack JSC")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "RELIEFLINK" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "CITYRESQ360" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "EDU-BRIDGE-TRACE" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "COFFEE OPS" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "COFFEE OPS API" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "COMMERCE HUB" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "FOOD MARKET" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "CDIO DELIVERY" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "CINEMA API" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án RELIEFLINK" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án CITYRESQ360" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án FAMILY TREE" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án COFFEE OPS" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án COMMERCE HUB" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Logo gốc COMMERCE HUB" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án FOOD MARKET" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án CDIO DELIVERY" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án CINEMA API" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án EDU-BRIDGE-TRACE" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án COFFEE OPS API" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Xem mã nguồn: EDU-BRIDGE-TRACE" })).toHaveAttribute("href", "https://gitlab.com/ThanhTruong2311/blockchain_dtudz");
  expect(screen.getByRole("link", { name: "Xem tài liệu: EDU-BRIDGE-TRACE" })).toHaveAttribute("href", "https://vietvo371.github.io/EduTraceBridge_docs/intro/");
  expect(screen.getByRole("link", { name: "Xem mã nguồn: COFFEE OPS API" })).toHaveAttribute("href", "https://gitlab.com/Kinghazard/k26_qlcaphe_be");
  expect(screen.getByRole("link", { name: "Xem mã nguồn frontend: COFFEE OPS" })).toHaveAttribute("href", "https://github.com/NguyenThai11103/K26_QLCaPhe_FE");
  expect(screen.getByRole("link", { name: "Xem mã nguồn backend: COFFEE OPS" })).toHaveAttribute("href", "https://gitlab.com/Kinghazard/k26_qlcaphe_be");
  expect(screen.getByText("github.com/NguyenThai11103/K26_QLCaPhe_FE")).toBeVisible();
  expect(screen.getAllByText("gitlab.com/Kinghazard/k26_qlcaphe_be")).toHaveLength(2);
  expect(screen.getByRole("link", { name: "Xem mã nguồn: CINEMA API" })).toHaveAttribute("href", "https://gitlab.com/Kinghazard/k24_api");
  expect(screen.getByRole("link", { name: "Xem mã nguồn frontend: COMMERCE HUB" })).toHaveAttribute("href", "https://github.com/NguyenThai11103/TMDT_FE");
  expect(screen.getByRole("link", { name: "Xem mã nguồn backend: COMMERCE HUB" })).toHaveAttribute("href", "https://github.com/NguyenThai11103/TMDT_BE");
  expect(screen.queryByRole("heading", { name: "SOCCERLIVE" })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "BÉ BIỂN" })).not.toBeInTheDocument();
  expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /trao đổi công việc/i })).toHaveAttribute("href", "#contact");
  expect(screen.getByRole("link", { name: /tải cv/i })).toHaveAttribute("download", "Nguyen-Ngoc-Duy-Thai-CV.pdf");
  expect(screen.getByRole("link", { name: "Liên hệ" })).toHaveAttribute("href", "#contact");
  expect(screen.getByRole("link", { name: /Duy Thái\s*Fullstack Developer/i })).toHaveAttribute("aria-current", "location");

  fireEvent.click(screen.getByRole("button", { name: "Switch to English" }));
  expect(screen.getByRole("heading", { name: /building systems/i })).toBeInTheDocument();
  expect(screen.getByText("Projects", { selector: "a" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "View documentation: EDU-BRIDGE-TRACE" })).toBeInTheDocument();
});

test("filters projects and opens an accessible case study", async () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Mobile" }));
  expect(screen.getByRole("heading", { name: "CITYRESQ360" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "FAMILY TREE" })).toBeInTheDocument();
  await waitFor(() => expect(screen.getByRole("heading", { name: "FAMILY TREE" }).closest("article")).toHaveClass("is-revealed"));
  expect(screen.queryByRole("heading", { name: "RELIEFLINK" })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "COFFEE OPS" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Tất cả" }));
  fireEvent.click(screen.getByRole("button", { name: "Xem case study: RELIEFLINK" }));

  expect(screen.getByRole("dialog", { name: "RELIEFLINK" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Bài toán" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Đóng case study" }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("unlocks scrolling before navigating from the mobile menu", () => {
  const scrollIntoView = vi.fn();
  Element.prototype.scrollIntoView = scrollIntoView;
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Mở menu" }));
  expect(document.body.style.overflow).toBe("hidden");

  fireEvent.click(screen.getByRole("link", { name: "Dự án" }));
  expect(document.body.style.overflow).toBe("");
  expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
  expect(window.location.hash).toBe("#portfolio");
});

test("submits the contact form directly and displays a success message", async () => {
  global.fetch.mockResolvedValue({
    ok: true,
    json: async () => ({ success: "true", message: "Email sent successfully" }),
  });

  render(<App />);

  fireEvent.change(screen.getByLabelText("Tên của bạn"), { target: { value: "Nguyễn Văn A" } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "visitor@example.com" } });
  fireEvent.change(screen.getByLabelText("Bạn đang muốn xây dựng gì?"), { target: { value: "Một nền tảng mới" } });
  fireEvent.click(screen.getByRole("button", { name: /gửi tin nhắn/i }));

  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  expect(global.fetch).toHaveBeenCalledWith(
    "https://formsubmit.co/ajax/kkdn011@gmail.com",
    expect.objectContaining({ method: "POST" }),
  );
  expect(JSON.parse(global.fetch.mock.calls[0][1].body)).toEqual(
    expect.objectContaining({
      _url: `${window.location.origin}${window.location.pathname}`,
      topic: "Cơ hội việc làm",
      reference: expect.stringMatching(/^PORT-/),
    }),
  );
  expect(await screen.findByText(/tin nhắn đã được gửi/i)).toBeInTheDocument();
  expect(screen.getByText(/mã tham chiếu: PORT-/i)).toBeInTheDocument();
});

test("shows the one-time activation instruction instead of a generic error", async () => {
  global.fetch.mockResolvedValue({
    ok: false,
    json: async () => ({ success: "false", message: "Please confirm your email to activate this form" }),
  });

  render(<App />);

  fireEvent.change(screen.getByLabelText("Tên của bạn"), { target: { value: "Nguyễn Văn A" } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "visitor@example.com" } });
  fireEvent.change(screen.getByLabelText("Bạn đang muốn xây dựng gì?"), { target: { value: "Một nền tảng mới" } });
  fireEvent.click(screen.getByRole("button", { name: /gửi tin nhắn/i }));

  expect(await screen.findByText(/mở email kích hoạt FormSubmit/i)).toBeInTheDocument();
});
