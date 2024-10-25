import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

const BlogCardSkeleton = () => (
    <Card className="w-full my-2 bg-background/60 dark:bg-default-100/50 backdrop-blur-lg">
      <div className="grid grid-cols-12 md:gap-6">
        <div className="relative col-span-12 md:col-span-4 min-h-[200px]">
          <Skeleton className="rounded-lg">
            <div className="h-[200px] rounded-lg bg-default-300" />
          </Skeleton>
          <div className="absolute top-0 left-0 bg-white dark:bg-default-100 p-2">
            <Skeleton className="w-16 rounded">
              <div className="h-5 w-16 rounded bg-default-300" />
            </Skeleton>
          </div>
        </div>
  
        <div className="col-span-12 md:col-span-8 p-4">
          <CardHeader className="flex-col items-start px-0 pb-0">
            <Skeleton className="w-3/4 rounded-lg">
              <div className="h-8 w-3/4 rounded-lg bg-default-300" />
            </Skeleton>
            
            <div className="flex gap-2 flex-wrap my-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="w-24 rounded-lg">
                  <div className="h-5 w-24 rounded-lg bg-default-300" />
                </Skeleton>
              ))}
            </div>
          </CardHeader>
          
          <CardBody className="px-0 py-2">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-full rounded-lg mb-2">
                <div className="h-4 w-full rounded-lg bg-default-300" />
              </Skeleton>
            ))}
            
            <Skeleton className="w-24 rounded-lg mt-4">
              <div className="h-8 w-24 rounded-lg bg-default-300" />
            </Skeleton>
          </CardBody>
        </div>
      </div>
    </Card>
  );

  export default BlogCardSkeleton;