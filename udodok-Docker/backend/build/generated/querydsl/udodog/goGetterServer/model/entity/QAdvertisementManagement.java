package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QAdvertisementManagement is a Querydsl query type for AdvertisementManagement
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAdvertisementManagement extends EntityPathBase<AdvertisementManagement> {

    private static final long serialVersionUID = 1321215144L;

    public static final QAdvertisementManagement advertisementManagement = new QAdvertisementManagement("advertisementManagement");

    public final StringPath content = createString("content");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath image = createString("image");

    public final StringPath name = createString("name");

    public final StringPath url = createString("url");

    public QAdvertisementManagement(String variable) {
        super(AdvertisementManagement.class, forVariable(variable));
    }

    public QAdvertisementManagement(Path<? extends AdvertisementManagement> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAdvertisementManagement(PathMetadata metadata) {
        super(AdvertisementManagement.class, metadata);
    }

}

