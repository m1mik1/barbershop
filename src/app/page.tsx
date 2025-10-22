import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Scissors, ShowerHead, Sparkles, Calendar, Clock, MapPin, Phone, Mail } from "lucide-react";

const services = [
  { key: "short",  title: "Стрижка коротка",       note: "25–35 хв", price: 350, icon: Scissors },
  { key: "medium", title: "Стрижка середня",       note: "30–45 хв", price: 400, icon: Scissors },
  { key: "long",   title: "Стрижка довге волосся", note: "40–60 хв", price: 500, icon: Scissors },
  { key: "fade",   title: "Fade",                  note: "35–45 хв", price: 450, icon: Scissors },
  { key: "buzz",   title: "Buzz cut",              note: "20–25 хв", price: 300, icon: Scissors },
  { key: "kids",   title: "Дитяча стрижка",        note: "20–30 хв", price: 300, icon: Scissors },
  { key: "beard",  title: "Оформлення бороди",     note: "20–30 хв", price: 300, icon: ShowerHead },
  { key: "combo",  title: "Стрижка + Борода",      note: "60–75 хв", price: 650, icon: Sparkles },
];

const masters = [
  { name: "Олег",   level: "Senior", gender: "M", tags: "Fade • Класика",       slots: ["11:00","14:00","18:00"], avatar: "/male.svg" },
  { name: "Іван",   level: "Middle", gender: "M", tags: "Борода • Контур",      slots: ["12:15","16:00","19:30"], avatar: "/male.svg" },
  { name: "Максим", level: "Senior", gender: "M", tags: "Комбо • Стайлінг",     slots: ["10:30","13:45","17:15"], avatar: "/male.svg" },
  { name: "Аня",    level: "Middle", gender: "F", tags: "Довге волосся • Care", slots: ["09:30","15:00","18:30"], avatar: "/female.svg" },
  { name: "Марія",  level: "Senior", gender: "F", tags: "Класика • Укладка",    slots: ["11:45","16:20","19:00"], avatar: "/female.svg" },
  { name: "Денис",  level: "Junior", gender: "M", tags: "Buzz • Kids",          slots: ["12:00","15:30","18:45"], avatar: "/male.svg" },
];

export default function Home() {
  return (
    <>
      <section id="home" className="bg-white min-h-[calc(100svh-var(--header-h))] flex scroll-mt-[var(--header-h)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">FreakCut • Барбершоп</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                Стрижки, гоління та догляд — <span className="underline underline-offset-4 decoration-black">без черг</span> і зайвих розмов
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                Обирай послугу, майстра та час — онлайн-запис займає менше хвилини. Прозорі ціни та професійні майстри.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/book"><Scissors className="size-4" /><span>Стрижка ₴400</span></Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/book"><ShowerHead className="size-4" /><span>Гоління ₴300</span></Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/book"><Sparkles className="size-4" /><span>Комбо ₴650</span></Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild><Link href={{ pathname: "/", hash: "masters" }}>Переглянути графік майстрів</Link></Button>
              <Button asChild variant="outline"><Link href={{ pathname: "/", hash: "services" }}>Дивитися інші послуги</Link></Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-[5/4]">
            <Image src="/barber-main.svg" alt="FreakCut — стрижка у барбершопі" fill priority className="object-contain" />
          </div>
        </div>
      </section>

      <section id="services" className="bg-neutral-50 scroll-mt-[var(--header-h)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Послуги</h2>
            <Button asChild variant="outline"><Link href="/book">Швидкий запис</Link></Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.key} className="h-full">
                  <CardHeader className="flex-row items-center gap-2">
                    <Icon className="size-5" aria-hidden />
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>Тривалість: {s.note}</p>
                    <p className="text-foreground font-medium">від ₴{s.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full"><Link href={`/book?service=${s.key}`}>Записатися</Link></Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="masters" className="bg-white border-t scroll-mt-[var(--header-h)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Майстри</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {masters.map((m) => (
              <Card key={m.name} className="h-full">
                <CardHeader className="flex items-center gap-3">
                  <div className="size-12 rounded-full overflow-hidden bg-neutral-100">
                    {m.avatar ? (
                      <Image src={m.avatar} alt={m.name} width={48} height={48} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-sm">{m.gender === "F" ? "👩" : "👨"}</div>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{m.name}</CardTitle>
                    <div className="text-xs text-muted-foreground">{m.tags}</div>
                  </div>
                  <span className="text-xs rounded-full border px-2 py-0.5">{m.level}</span>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><Calendar className="size-4" /> Сьогодні: {m.slots.slice(0,3).join(", ")}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full"><Link href={`/book?master=${encodeURIComponent(m.name)}`}>Обрати час</Link></Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white border-t scroll-mt-[var(--header-h)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">Ціни</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle className="text-lg">Волосся</CardTitle></CardHeader>
              <CardContent className="text-sm">
                <div className="flex items-center justify-between border-b py-2"><span>Коротка</span><span className="font-medium">₴350</span></div>
                <div className="flex items-center justify-between border-b py-2"><span>Середня</span><span className="font-medium">₴400</span></div>
                <div className="flex items-center justify-between border-b py-2"><span>Довга</span><span className="font-medium">₴500</span></div>
                <div className="flex items-center justify-between py-2"><span>Fade / Buzz</span><span className="font-medium">₴300–450</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Борода / Комбо</CardTitle></CardHeader>
              <CardContent className="text-sm">
                <div className="flex items-center justify-between border-b py-2"><span>Оформлення бороди</span><span className="font-medium">₴300</span></div>
                <div className="flex items-center justify-between border-b py-2"><span>Гоління класичне</span><span className="font-medium">₴300</span></div>
                <div className="flex items-center justify-between py-2"><span>Стрижка + Борода</span><span className="font-medium">₴650</span></div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 text-sm text-muted-foreground space-y-1">
            <p className="flex items-center gap-2"><Clock className="size-4" /> Тривалість залежить від типу волосся та складності.</p>
            <p>Фінальна вартість може відрізнятися за майстром та обраним доглядом.</p>
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-neutral-50 border-t scroll-mt-[var(--header-h)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Контакти</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardContent className="pt-6 space-y-3 text-sm">
                <p className="flex items-center gap-2"><MapPin className="size-4" /> Київ, вул. Прикладна, 10</p>
                <p className="flex items-center gap-2"><Phone className="size-4" /><a className="underline-offset-4 hover:underline" href="tel:+380221351488">+380 221 351 488</a></p>
                <p className="flex items-center gap-2"><Mail className="size-4" /><a className="underline-offset-4 hover:underline" href="mailto:hello@freakcut.ua">hello@freakcut.ua</a></p>
                <p className="flex items-center gap-2"><Clock className="size-4" /> Щодня 09:00–20:00</p>
                <div className="pt-2">
                  <div className="text-xs uppercase text-muted-foreground mb-2">Оплата</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border px-2 py-1 text-xs">Готівка</span>
                    <span className="rounded-full border px-2 py-1 text-xs">Картка</span>
                    <span className="rounded-full border px-2 py-1 text-xs">Apple Pay</span>
                    <span className="rounded-full border px-2 py-1 text-xs">Google Pay</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase text-muted-foreground mb-2">Зручності</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border px-2 py-1 text-xs">Wi-Fi</span>
                    <span className="rounded-full border px-2 py-1 text-xs">Паркування</span>
                    <span className="rounded-full border px-2 py-1 text-xs">Доступність</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="relative rounded-xl overflow-hidden border min-h-48">
              <Image src="/map.svg" alt="Мапа" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
