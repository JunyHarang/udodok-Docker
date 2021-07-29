package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QSharingBoardTag is a Querydsl query type for SharingBoardTag
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSharingBoardTag extends EntityPathBase<SharingBoardTag> {

    private static final long serialVersionUID = -663330736L;

    public static final QSharingBoardTag sharingBoardTag = new QSharingBoardTag("sharingBoardTag");

    public final StringPath Content = createString("Content");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Long> sharingBoardId = createNumber("sharingBoardId", Long.class);

    public QSharingBoardTag(String variable) {
        super(SharingBoardTag.class, forVariable(variable));
    }

    public QSharingBoardTag(Path<? extends SharingBoardTag> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSharingBoardTag(PathMetadata metadata) {
        super(SharingBoardTag.class, metadata);
    }

}

