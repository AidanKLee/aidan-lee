import InputError from "@/Components/InputError";
import { useFetch } from "@/Hooks/useFetch";
import Dashboard from "@/Layouts/Dashboard";
import Main from "@/Layouts/Main";
import { useForm, usePage } from "@inertiajs/react";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";

export default function Profile() {
  const container = useRef(null);

  const { auth } = usePage().props;

  const { data, setData, fetch, processing, reset } = useFetch({
    first_name: auth.user.first_name,
    last_name: auth.user.last_name,
    email: auth.user.email,
    marketing: auth.user.marketting === 1,
  });

  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordConfirmation, setHidePasswordConfirmation] =
    useState(true);

  useEffect(() => {
    return () => reset("password", "password_confirmation");
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const splits = document.querySelectorAll(".split");
      const timeline = gsap.timeline();

      splits.forEach((split) => {
        const text = new SplitType(split, { types: "chars,words" });

        timeline.from(text.chars, {
          opacity: 0,
          stagger: 0.1,
          scaleY: 0,
          transformOrigin: "top",
          y: -100,
          duration: 0.5,
        });
      });
    }, container);

    return () => context.revert();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(route("register"));
  }

  return (
    <Main>
      <Dashboard />
      <div className="flex grow" ref={container}>
        <section className="flex grow select-none px-4 py-8">
          <div className="mx-auto my-auto">
            <h1 className="split text-center text-4xl uppercase xs:text-5xl sm:text-7xl lg:text-9xl">
              Profile
            </h1>
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-2 font-bold"
            >
              <div>
                <label htmlFor="first_name">First Name *</label>
                <input
                  className="w-full rounded-md border-0 focus:outline-0 focus:ring-2 focus:ring-violet-ultra"
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={data.first_name}
                  onChange={(e) => setData("first_name", e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name *</label>
                <input
                  className="w-full rounded-md border-0 focus:outline-0 focus:ring-2 focus:ring-violet-ultra"
                  id="last_name"
                  name="last_name"
                  type="text"
                  value={data.last_name}
                  onChange={(e) => setData("last_name", e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input
                  className="w-full rounded-md border-0 focus:outline-0 focus:ring-2 focus:ring-violet-ultra"
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  required
                />
              </div>
              {/* <div>
                <label htmlFor="password">Password *</label>
                <div className="relative">
                  <input
                    className="w-full rounded-md border-0 pr-10 focus:ring-2 focus:ring-violet-ultra"
                    id="password"
                    name="password"
                    type={hidePassword ? "password" : "text"}
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    required
                  />
                  <button
                    className="absolute bottom-0 right-0 p-[10px] duration-300 hover:text-violet-ultra focus:text-violet-ultra  focus:outline-0"
                    type="button"
                    onClick={() => setHidePassword(!hidePassword)}
                  >
                    {hidePassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                      >
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 640 512"
                        fill="currentColor"
                      >
                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                      </svg>
                    )}
                  </button>
                </div>
                <InputError className="mt-1" message={errors.password} />
              </div>
              <div>
                <label htmlFor="password_confirmation">
                  Confirm password *
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-md border-0 pr-10 focus:ring-2 focus:ring-violet-ultra"
                    id="password_confirmation"
                    name="password_confirmation"
                    type={hidePasswordConfirmation ? "password" : "text"}
                    value={data.password_confirmation}
                    onChange={(e) =>
                      setData("password_confirmation", e.target.value)
                    }
                    required
                  />
                  <button
                    className="absolute bottom-0 right-0 p-[10px] duration-300 hover:text-violet-ultra focus:text-violet-ultra focus:outline-0"
                    type="button"
                    onClick={() =>
                      setHidePasswordConfirmation(!hidePasswordConfirmation)
                    }
                  >
                    {hidePasswordConfirmation ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                      >
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 640 512"
                        fill="currentColor"
                      >
                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                      </svg>
                    )}
                  </button>
                </div>
                <InputError
                  className="mt-1"
                  message={errors.password_confirmation}
                />
              </div> */}
              <div>
                <input
                  className="mr-2 rounded focus:outline-0 focus:outline-offset-0 focus:ring-2 focus:ring-violet-ultra"
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  checked={data.marketing}
                  onChange={(e) => setData("marketing", !data.marketing)}
                />
                <label className="text-sm" htmlFor="marketing">
                  I'm happy to receive emails that keep us in touch
                </label>
              </div>
              <div className="flex flex-wrap justify-end gap-4">
                <button
                  className="btn btn-primary disabled:opacity-50"
                  type="submit"
                  disabled={processing}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg>
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Main>
  );
}
