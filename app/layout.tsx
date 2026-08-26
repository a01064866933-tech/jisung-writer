import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '박지성 작가 | 다섯 평이면 충분해',
  description: '낮에는 샌드위치를 만들고 밤에는 글을 쓰는, 『다섯 평이면 충분해』 저자 박지성의 공식 페이지입니다.',
  openGraph: {
    title: '박지성 작가 | 다섯 평이면 충분해',
    description: '삶과 회복, 작은 가게와 다시 시작하는 힘을 이야기합니다.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
