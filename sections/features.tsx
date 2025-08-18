import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";

const Feature17 = () => {
  return (
    <section className="py-16">
      <div className="container max-w-7xl">
        <p className="mb-4 text-xs text-muted-foreground md:pl-5">Features</p>
        <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">
          Our Core Features
        </h2>
        <div className="mt-5 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-5">
          {/* Performance */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <Timer className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">Performance</h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium quam. Temporibus quae quos deserunt!
              </p>
            </div>
          </div>

          {/* Innovation */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <Zap className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">Innovation</h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium quam. Temporibus quae quos deserunt!
              </p>
            </div>
          </div>

          {/* Quality */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <ZoomIn className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">Quality</h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium quam. Temporibus quae quos deserunt!
              </p>
            </div>
          </div>

          {/* Accessibility */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <PersonStanding className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">Accessibility</h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium quam. Temporibus quae quos deserunt!
              </p>
            </div>
          </div>

          {/* Affordability */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <DollarSign className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">Affordability</h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium quam. Temporibus quae quos deserunt!
              </p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <MessagesSquare className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Customer Support
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, accusantium quam. Temporibus quae quos deserunt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature17 };
