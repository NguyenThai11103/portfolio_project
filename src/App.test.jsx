import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener: () => {}, removeListener: () => {} }));
  class IntersectionObserverMock {
    observe() {}
    disconnect() {}
  }
  window.IntersectionObserver = IntersectionObserverMock;
  global.IntersectionObserver = IntersectionObserverMock;
});

beforeEach(() => {
  window.localStorage.clear();
});

test("renders GitHub-backed projects and switches the full page to English", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /xây dựng hệ thống/i })).toBeInTheDocument();
  expect(screen.getByText("DZFullStack JSC")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "RELIEFLINK" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "CITYRESQ360" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "COFFEE OPS" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "COMMERCE HUB" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "FOOD MARKET" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "CDIO DELIVERY" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "CINEMA API" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án COFFEE OPS" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án COMMERCE HUB" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Logo gốc COMMERCE HUB" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án FOOD MARKET" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án CDIO DELIVERY" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh dự án CINEMA API" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Xem mã nguồn frontend: COFFEE OPS" })).toHaveAttribute("href", "https://github.com/NguyenThai11103/K26_QLCaPhe_FE");
  expect(screen.getByRole("link", { name: "Xem mã nguồn backend: COFFEE OPS" })).toHaveAttribute("href", "https://gitlab.com/Kinghazard/k26_qlcaphe_be");
  expect(screen.getByText("github.com/NguyenThai11103/K26_QLCaPhe_FE")).toBeVisible();
  expect(screen.getByText("gitlab.com/Kinghazard/k26_qlcaphe_be")).toBeVisible();
  expect(screen.getByRole("link", { name: "Xem mã nguồn: CINEMA API" })).toHaveAttribute("href", "https://gitlab.com/Kinghazard/k24_api");
  expect(screen.getByRole("link", { name: "Xem mã nguồn frontend: COMMERCE HUB" })).toHaveAttribute("href", "https://github.com/NguyenThai11103/TMDT_FE");
  expect(screen.getByRole("link", { name: "Xem mã nguồn backend: COMMERCE HUB" })).toHaveAttribute("href", "https://github.com/NguyenThai11103/TMDT_BE");
  expect(screen.queryByRole("heading", { name: "SOCCERLIVE" })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "BÉ BIỂN" })).not.toBeInTheDocument();
  expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Switch to English" }));
  expect(screen.getByRole("heading", { name: /building systems/i })).toBeInTheDocument();
  expect(screen.getByText("Projects", { selector: "a" })).toBeInTheDocument();
});
